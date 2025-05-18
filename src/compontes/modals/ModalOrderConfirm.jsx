import {
  CheckCircleIcon,
  PencilIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";

import { useOrderContext } from "../../context/OrderContext";

import { values, generalText } from "./ModalSettings";

import CountdownTimer from "./CountdownTimer"; // Import the CountdownTimer component
function ModalOrderConfirm() {
  const { openModalConfirm, setOpenModalConfirm, modalCondition } =
    useOrderContext();
  //if (option === null) return;

  const COUNTDOWN_SECONDS = 10000;

  /*<p className="text-gray-600/50 mt-6">
  {generalText.replace("seconds", "")}
  <CountdownTimer
    seconds={COUNTDOWN_SECONDS}
    onComplete={handleTimerComplete}
    className="font-bold"
  />{" "}
  &nbsp;seconds
</p>*/

  return (
    <div className="flex flex-col items-center">
      <h1>Aqui va el texto</h1>
    </div>
  );
}

export default ModalOrderConfirm;
