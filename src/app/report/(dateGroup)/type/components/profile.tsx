import { faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

import type { ItemDetail } from "@/store/report";

interface Props {
  detail: ItemDetail;
  showBook?: boolean;
}

const Profile: FC<Props> = ({ detail, showBook }) => {
  return (
    <div className="flex gap-2">
      <div className="flex size-10 items-center justify-center rounded-full bg-gray-400 text-white ">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div>
        <div className="text-sm font-semibold">{detail.text1}</div>
        <div className="text-xs">
          {showBook && <FontAwesomeIcon icon={faBook} className="pr-1" />}
          {detail.text2}
        </div>
      </div>
    </div>
  );
};

export default Profile;
