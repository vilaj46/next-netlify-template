import dynamic from "next/dynamic";
import config from "../cms/config";

import CustomTextPreview from "../components/admin/CustomTextPreview";
import CustomTextControl from "../components/admin/CustomTextControl";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.registerWidget("customtext", CustomTextControl, CustomTextPreview);
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
