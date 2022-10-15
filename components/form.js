import AddUserFrom from "./addUserFrom";
import UpdateUserFrom from "./updateUserForm";

export default function Form() {
  const flag = false;

  return (
    <div className="container mx-auto py-5">
      {flag ? <AddUserFrom /> : <UpdateUserFrom />}
    </div>
  );
}
