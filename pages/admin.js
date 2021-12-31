import dynamic from "next/dynamic";
import config from "../cms/config";

import Control from "../components/admin/Control";
import Preview from "../components/admin/Preview";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.registerWidget("test", Control, Preview);
      cms.init({ config });
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage = () => {
  return (
    <div>
      <CMS />
    </div>
  );
};

export default AdminPage;
