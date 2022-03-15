import "./Pagination.css";

const Pagination = (props: { paginationItems: JSX.Element[] | undefined }) => {
  return (
    <div className="paginationItemsWrapper">
      {props.paginationItems}
    </div>
  );
};
export default Pagination;
