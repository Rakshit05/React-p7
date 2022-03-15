import "./UserProfileCard.css";
import ProgressBarChart from "./ProgressBarChart";

const UserProfileCard = (props: {
  user: {
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
  } | null;
}) => {
  return (
    <>
      {props.user !== null && (
        <div className="userProfileCard">
          <img
            src={props.user.avatar}
            alt="user_avatar"
            className="userProfile"
          />

          <p className="cardUserName">
            {props.user.first_name + " " + props.user.last_name}
            <span className="userDot">&#729;</span>
          </p>
          <p className="cardUserEmail">{props.user.email}</p>
          <p className="cardUserPlan">Your Plan: Standard</p>
          <button>Active User</button>
          <ProgressBarChart />
        </div>
      )}
    </>
  );
};

export default UserProfileCard;
