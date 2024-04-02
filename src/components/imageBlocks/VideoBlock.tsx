import { ComponentImageBlocksVideo } from "@/graphql/__generated__";
import { Video } from "../Video";

const VideoBlock = (props: { content: ComponentImageBlocksVideo }) => {
  return <Video srcMedia={props.content.video.data.attributes} />;
};

export { VideoBlock };
