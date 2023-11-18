import Stu from './Component/Stu';
function App() {
  var Sname="Nagappan Sabari"
  var SAge="19"
  var SEmail="nagappansabari824@gmail.com"
  var SDept="CSE"
  var SCllge="SKCET"
  return (
    <Stu name={Sname} Age={SAge} email={SEmail} dept={SDept} cllge={SCllge}/>
  );
  }
export default App;
