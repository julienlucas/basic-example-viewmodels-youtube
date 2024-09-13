import { TrainingCardViewModelProps } from "@trainingsapp/di/ioc";

const COLOR_TITLE_CARD = "primary.0";
const BG_COLOR_BOTTOM_CARD = "gray.700";

export function TrainingCardViewModel({
  useState
}: TrainingCardViewModelProps) {
  const [toggleActionBar, setToggleActionBar] = useState<boolean>(false);
  const [colorTitleCard, setColorTitleCard] = useState<string>(COLOR_TITLE_CARD);
  const [bgColorBottomCard, setBgColorBottomCard] = useState<string>(BG_COLOR_BOTTOM_CARD);

  const onDelete = async () => {
    alert('Delete card')
  };

  const handleMouseEnterCard = () => {
    setBgColorBottomCard("white");
    setColorTitleCard("black");
    setToggleActionBar(true);
  };

  const handleMouseLeaveCard = () => {
    setBgColorBottomCard(BG_COLOR_BOTTOM_CARD);
    setColorTitleCard(COLOR_TITLE_CARD);
    setToggleActionBar(false);
  };

  return {
    colorTitleCard,
    setColorTitleCard,
    handleMouseEnterCard,
    handleMouseLeaveCard,
    onDelete,
    bgColorBottomCard,
    toggleActionBar,
    setToggleActionBar,
  };
}
