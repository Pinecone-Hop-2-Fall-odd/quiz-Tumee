import ReactPlayer from 'react-player'
export function Video() {
  return (
    <div>
        <ReactPlayer
            url={'/video/202311271819.mp4'}
            controls
            playing
            loop
            width="70vh"
            height="auto"
          />
    </div>
  );
}
