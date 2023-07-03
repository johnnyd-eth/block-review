import { Tooltip } from "antd";
import { VerifiedIcon } from "./VerifiedIcon";

export function VerifiedReviewBadge() {
  return (
    <Tooltip title="This user's wallet actively interacts with this project's Ethereum smart contracts." overlayInnerStyle={{ textAlign: 'center'}}>
      <div className="rounded-full bg-swatch-100 px-4 py-2.5 flex justify-between items-center gap-1.5 cursor-default">
        <VerifiedIcon height={16} width={16} />
        <span className="text-swatch-500 text-xs">Verified user</span>
      </div>
    </Tooltip>
  )
}
