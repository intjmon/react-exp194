import { useContext } from "react";

import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
import { Card } from "./components/Card";

const App = () => {
  const [isAdmin, setIsAdmin] = useContext(AdminFlagContext);

  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {/* 관리자 플래그가 trur일때와 그렇지 않을때 문자열 출력 구분 */}
      {isAdmin ? <span>관리자입니다</span> : <span>관라지가 아닙니다</span>}
      <button onClick={onClickSwitch}>전환</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};

export default App;
