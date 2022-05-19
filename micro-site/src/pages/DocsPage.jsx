import SideBar from "../components/SideBar";
import str  from '../static/DOCS.md';
import MarkdownRenderer from "../utils/MarkdownRenderer";

export default function DocsPage() {
  return (
    <div className="DocsPage">
      <SideBar />
      <div className="container">
        <MarkdownRenderer markdown={str} />
        <h3>개발자 컨트리뷰트 가이드</h3>
        <p>개발자는 컨트리뷰트를 이렇게 하시면 됩니다.</p>
        하하
      </div>
    </div>
  );
}
