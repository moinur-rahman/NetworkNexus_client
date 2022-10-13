import Image from "next/image";
import { Box } from "@chakra-ui/react";

const ImageBox: React.FC = () => {
  return (
    <Box width={"50%"} height={"100%"} position={"relative"} display={{base:"none",md:"inherit"}}>
      <Image src={"/images/chat.jpg"} alt={"chat-image"} layout={"fill"} />
    </Box>
  );
};

export default ImageBox;
