import dynamic from "next/dynamic";
import config from "../cms/config";

import CustomTextPreview from "../components/admin/CustomTextPreview";
import ControlOne from "../components/admin/ControlOne";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.registerWidget("customone", ControlOne, CustomTextPreview);
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
