import dynamic from "next/dynamic";
import config from "../cms/config";

import CustomTextPreview from "../components/CustomTextPreview";
import CustomTextControl from "../components/CustomTextControl";

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
