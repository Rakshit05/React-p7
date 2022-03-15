import "./UserList.css";
import * as Icon from "react-feather";
import Pagination from "../Pagination/Pagination";

interface user {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  userStatus: string;
  userAccess: string;
}

export const UserList = (props: {
  users: user[];
  handleHover: (arg0: user | null) => void;
  paginationItems: JSX.Element[] | undefined;
}) => {
  return (
    <table>
      <thead>
        <tr className="headRow">
          <th className="col-1">Name</th>
          <th>Status</th>
          <th>Access</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user, index) => {
          return (
            <>
              {index === 0 && (
                <tr>
                  <td className="userDetailsWrapper">
                    <img
                      src={user.avatar}
                      alt="user_avatar"
                      className="profileImg"
                    />

                    <span className="userName">
                      {user.first_name + " " + user.last_name}
                    </span>
                    <span className="userEmail">{user.email}</span>
                  </td>
                  <td style={{ color: "#04AA6D", fontWeight: "700" }}>
                    Active
                  </td>
                  <td>Owner</td>
                  <td>
                    <Icon.Lock
                      size={18}
                      style={{ color: "rgba(0, 0, 0, 0.6)" }}
                    />
                  </td>
                </tr>
              )}
              {index !== 0 && (
                <tr
                  onMouseEnter={() => {
                    props.handleHover(user);
                  }}
                  onMouseLeave={() => {
                    props.handleHover(null);
                  }}
                >
                  <td className="userDetailsWrapper">
                    <img
                      src={user.avatar}
                      alt="user_avatar"
                      className="profileImg"
                    />

                    <span className="userName">
                      {user.first_name + " " + user.last_name}
                    </span>
                    <span className="userEmail">{user.email}</span>
                  </td>
                  <td className="">
                    <select className="selectMenu" value={user.userStatus}>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </td>
                  <td className="">
                    <select className="selectMenu" value={user.userAccess}>
                      <option value="Manager">Manager</option>
                      <option value="Read">Read</option>
                    </select>
                  </td>
                  <td className="image-pointer">
                    <Icon.Trash2/>
                  </td>
                </tr>
              )}
            </>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4} className="paginationWrapper">
            <Pagination paginationItems={props.paginationItems} />
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
