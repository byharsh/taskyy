import { FOOTER_LABELS } from "../../shared/constants/layoutConstants.js";

const Footer = () => {
  return (
    <div className="h-8 w-full bg-yellow-100 opacity-70  flex justify-between items-center px-6 text-gray-400">
      <div className="flex gap-4 text-xs tracking-wider ">
        <span>{FOOTER_LABELS.MENU_ROADMAP}</span>
        <span>{FOOTER_LABELS.MENU_HOW_TO}</span>
      </div>
      <span className="text-xs tracking-wider">{FOOTER_LABELS.COPYRIGHT}</span>
    </div>
  );
};

export default Footer;
