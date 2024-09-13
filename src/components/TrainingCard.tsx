import { Box, Flex, Image, Text } from "@chakra-ui/react";
import type { Training } from "@trainingsapp/models/training.interface";
import DI from "@trainingsapp/di/ioc";

interface TrainingCardProps {
  training: Training;
}

const TrainingCard = ({ training }: TrainingCardProps) => {
  const {
    colorTitleCard,
    handleMouseEnterCard,
    handleMouseLeaveCard,
    bgColorBottomCard
  } = DI.resolve("TrainingCardViewModel");

  return (
    <Box>
      <Flex
        width="28rem"
        height="36rem"
        borderRadius="0.8rem"
        onMouseEnter={handleMouseEnterCard}
        onMouseLeave={handleMouseLeaveCard}
        onClick={() => alert("Delete")}
        cursor="pointer"
      >
        <Flex
          position="relative"
          flexDirection="column"
          height="100%"
          width="100%"
          data-testid={`training-card-${training.id}`}
        >
          <Box
            position="relative"
            width="100%"
            height="26rem"
            bg="gray.400"
            borderTopRadius="0.8rem"
            overflow="hidden"
          >
            <Image
              src={training?.thumbnail?.url}
              objectFit="cover"
              width="100%"
              height="100%"
              zIndex="1"
            />
          </Box>
          <Flex
            padding="1.6rem"
            height="10rem"
            borderBottomRadius="0.8rem"
            flexDirection="column"
            justifyContent="space-between"
            bg={bgColorBottomCard}
            transition="background 0.15s"
          >
            <Text
              color={colorTitleCard}
              fontSize="1.6rem"
              fontWeight="700"
              transition="background 0.15s"
            >
              {training?.title}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TrainingCard;
