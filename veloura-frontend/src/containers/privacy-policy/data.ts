import { PrivacyPolicyData } from './types';

export const privacyPolicyData: PrivacyPolicyData = {
  title: "Privacy Policy",
  sections: [
    {
      id: "privacy-policy",
      title: "",
      content: "Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis."
    },
    {
      id: "security",
      title: "Security",
      content: "Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque."
    },
    {
      id: "cookies",
      title: "Cookies",
      content: "We use cookies to enhance your experience on our website. Below are the types of cookies we use:",
      items: [
        "Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin.",
        "Nam fringilla molestie velit, eget pellentesque risus scelerisque a"
      ]
    }
  ]
};

export default privacyPolicyData;