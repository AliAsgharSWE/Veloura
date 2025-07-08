export interface PolicySection {
  id: string;
  title: string;
  content: string;
  items?: string[];
}

export interface PrivacyPolicyData {
  title: string;
  lastUpdated?: string;
  sections: PolicySection[];
}

export interface PrivacyPolicyProps {
  data?: PrivacyPolicyData;
  className?: string;
}