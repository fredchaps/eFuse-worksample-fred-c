import { Poppins } from "@next/font/google";
import classnames from "classnames";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import styles from "styles/Home.module.css";
import useUserStore from "../../state/user";

dayjs.extend(duration);
dayjs.extend(relativeTime);

const poppins = Poppins({ weight: "500" });

type Props = {
  size: string;
  postDate: Date;
};

const UserHeader: React.FC<Props> = ({ size, postDate }) => {
  const timeSince = dayjs(postDate);
  const user = useUserStore((state) => state.user);
  const imageSize = size === "large" ? 60 : 40;
  return (
    <div className={styles.flexRow}>
      <Image
        src={user.avatar}
        width={imageSize}
        height={imageSize}
        alt="User Avatar"
        className={styles.rounded}
      />
      <div className={styles.oneRemLeft}>
        <div className={classnames(poppins.className, styles.h2)}>
          {user.username}
        </div>
        <div className={styles.textS}>{timeSince.fromNow()}</div>
      </div>
    </div>
  );
};

export default UserHeader;
