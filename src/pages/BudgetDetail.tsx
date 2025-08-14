import { useParams } from "react-router-dom";

const BudgetDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Budget Detail: {id}</h1>
      {/* Budget info and expenses go here */}
    </div>
  );
};

export default BudgetDetail;
