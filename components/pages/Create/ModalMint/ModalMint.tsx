/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import style from './ModalMint.module.scss';
import Close from 'components/assets/close';
import randomstring from 'randomstring';
import QRCode from 'components/base/QRCode';
import CheckMark from 'components/assets/checkmark';
import { useRouter } from 'next/router'
import { connect as connectIo, socketWaitForEvent } from 'utils/socket/socket.helper';
import { SOCKET_URL } from 'utils/constant';
import { Circle } from 'rc-progress';

export interface ModalProps {
  setModalCreate: (b: boolean) => void;
  processed: boolean;
  error: string;
  setError: (s: string) => void;
  output: string[];
  QRData: any;
  uploadNFT: (
    publicPGPs: string[], 
    setProgressData?: (n: number[]) => void,
  ) => Promise<{
    nftUrls: string[];
    seriesId: number;
  }>;
  uploadSize: number;
}

const ModalMint: React.FC<ModalProps> = ({
  setModalCreate,
  error,
  setError,
  output,
  QRData,
  uploadNFT,
  uploadSize,
}) => {
  const [session] = useState(randomstring.generate());
  const { walletId, quantity } = QRData;
  const [showQR, setShowQR] = useState(false);
  const [qrData] = useState({ session, socketUrl: SOCKET_URL, walletId, quantity, uploadSize})
  const [qrAction, setQrAction] = useState('MINT')
  const [qrRetry, setQrRetry] = useState(false)
  const [runNFTMintData, setRunNFTMintData] = useState({})
  const [showProgress, setShowProgress] = useState(false);
  const [progressData, setProgressData] = useState([] as number[]);
  const [isRN, setIsRN] = useState(false);
  const [mintReponse, setMintResponse] = useState(null)
  const [startUploadTime, setStartUploadTime] = useState<any>(null)
  const [alreadySentSocketTimeout, setAlreadySentSocketTimeout] = useState(false)
  const [stateSocket, setStateSocket] = useState<any>(null)
  const router = useRouter();
  const progressQuantity = 1 + Number(quantity)
  const elapsedUploadTime = (startUploadTime && startUploadTime instanceof Date) ? (+new Date() - +startUploadTime) : 0
  const generalPercentage = () => {
    let percentage = 0
    if (progressData.length === progressQuantity){ 
      percentage = progressData.reduce((a, b) => a + b) / progressData.length
    }else{
      const missingProgressArray = Array.from({length: progressQuantity - progressData.length}).fill(0) as number[]
      const mergedArray = [...progressData, ...missingProgressArray]
      percentage = mergedArray.reduce((a, b) => a + b) / mergedArray.length
    }
    return Math.ceil(percentage)
  }
  const speed = Math.floor((uploadSize*(generalPercentage()/100))/elapsedUploadTime)
  const remainingTime = Math.ceil(((elapsedUploadTime/generalPercentage())*(100-generalPercentage())))
  const handleMintSocketProcess = () => {
    console.log('socket connect on session', session);
    const socket = connectIo(`/socket/createNft`, { session, socketUrl: SOCKET_URL }, undefined, 20 * 60 * 1000);
    setStateSocket(socket)
    socket.on('CONNECTION_SUCCESS', () => {
      if (isRN) {
        const data = qrData;
        setTimeout(function () {
          window.ReactNativeWebView.postMessage(JSON.stringify({ action: qrAction, data }));
        }, 2000);
      } else {
        setShowQR(true);
      }
    });
    socket.on('connect_error', (e) => {
      console.error('connection error socket', e);
      setModalCreate(false);
    });

    socket.on('CONNECTION_FAILURE', (data) => {
      console.error('connection failure socket', data)
      setError(data.msg)
    });
    socket.on('PGPS_READY', async ({ publicPgpKeys }) => {
      socket.emit('PGPS_READY_RECEIVED')
      setShowQR(false)
      setShowProgress(true)
      setStartUploadTime(new Date())
      const { nftUrls, seriesId } = await uploadNFT(publicPgpKeys, setProgressData)
      setRunNFTMintData({ nftUrls, seriesId })
      socket.emit('RUN_NFT_MINT', {nftUrls, seriesId})
      setShowProgress(false)
      setProgressData([])
      try{
        await socketWaitForEvent(socket, 'RUN_NFT_MINT_RECEIVED')
        // all ok
      }catch(err){
        //The wallet timedout
        setQrAction('MINT_RETRY')
        setQrRetry(true)
        if (isRN) {
          setTimeout(function () {
            window.ReactNativeWebView.postMessage(JSON.stringify({ action: qrAction, data: qrData }));
          }, 2000);
        } else {
          setShowQR(true);
        }
      }
    });
    socket.on('WALLET_READY', () =>{
      socket.emit('RUN_NFT_MINT', runNFTMintData)
      setShowQR(false)
    })
    socket.on('MINTING_NFT', ({ success }) => {
      socket.emit('MINTING_NFT_RECEIVED')
      socket.close();
      setMintResponse(success)
      setTimeout(() => {
        setModalCreate(false);
        router.reload()
      }, 1500)
    });
    socket.on('disconnect', () => {
      setModalCreate(false);
    });

    return () => {
      if (socket && socket.connected) {
        socket.close();
      }
    };
  }
  useEffect(() => {
    setIsRN(window.isRNApp);
  }, []);
  useEffect(() => {
    if (showQR) {
      handleMintSocketProcess()
    }
  }, [showQR]);

  useEffect(() => {
    if (output.length > 0) {
      setShowQR(true);
    }
  }, [output])
  useEffect(() => {
    if (!alreadySentSocketTimeout && speed && stateSocket && stateSocket.connected && elapsedUploadTime>5000){
      stateSocket.emit('UPLOAD_REMAINING_TIME', { remainingTime })
      setAlreadySentSocketTimeout(true)
    }
  }, [speed])

  function returnState() {
    if (output.length > 0) {
      return (
        <>
          { mintReponse === null && (
            <>
              {showQR ?
                !qrRetry ?
                  <div className={style.Text}>
                    Flash this QR Code on your mobile wallet app to mint your NFT on the
                    Ternoa blockchain.
                  </div>
                :
                  <div className={style.Text}>
                    Flash this QR Code on your mobile wallet app to finish the minting process.
                  </div>
              : 
                <div className={style.Text}>
                  Your media is being encrypted and uploaded. Please wait...
                </div>
              }
              
              {showQR && (
                <div className={style.QR}>
                  <QRCode
                    data={qrData}
                    action={qrAction}
                  />
                </div>
              )}
              {(!showQR && !showProgress) && (
                <div className={style.Loading}>
                  <span className={style.Dot}></span>
                  <span className={style.Dot}></span>
                  <span className={style.Dot}></span>
                </div>
              )}
              {(!showQR && showProgress) && (
                <>
                  <Circle percent={generalPercentage()} strokeWidth={3} strokeColor="#7417ea" className={style.ProgressBar}/>
                  <div className={style.Text}>{`Progress : ${generalPercentage()}%`}</div>
                  <div className={style.Text}>{`Speed : ${speed} kb/sec`}</div>
                </>
              )}
            </>
          )}
          {(mintReponse === true) && <div className={style.Text}>
            Mint was added to the blockchain.
          </div>}
          {(mintReponse === false) && <div className={style.Text}>
            Mint was not added to the blockchain.
          </div>}
        </>
      );
    } else {
      return (
        <>
          <div className={style.Text}>
            Please wait while we are processing your files.
          </div>
          <div className={style.Status}>
            {output.length > 0 ? (
              <div className={style.Step}>
                Upload completed <CheckMark className={style.CheckMark} />
              </div>
            ) : (
                <div className={style.Waiting}>
                  <div className={style.Mess}>Minting NFT...</div>
                  <div className={style.Loading}>
                    <span className={style.Dot}></span>
                    <span className={style.Dot}></span>
                    <span className={style.Dot}></span>
                  </div>
                </div>
              )}
          </div>
        </>
      );
    }
  }
  return (
    <div id="createModal" className={style.Background}>
      <div className={style.Container}>
        <Close onClick={() => setModalCreate(false)} className={style.Close} />
        <div className={style.Title}>Create NFT</div>
        {error ? <div className={style.Error}>{error}</div> : returnState()}
      </div>
    </div>
  );
};

export default ModalMint;
