import { useEffect, useState } from "react";
import { useLocalizationContext } from "../context/localization/localization-context.ts";
import { getContactPageData } from "../network/repository/contact-repository.ts";
import ContactEntry from "../component/contact/ContactEntry.tsx";
import { ContactPageData } from "../data/api-data-types";

function ContactPage() {
  const [pageData, setPageData] = useState<ContactPageData | null>(null);
  const { langData } = useLocalizationContext();

  useEffect(() => {
    if (langData?.currentLang?.code) {
      getContactPageData(langData.currentLang.code).then((responseJson) => {
        setPageData(responseJson);
      });
    }
  }, [langData?.currentLang?.code]);

  if (!pageData) {
    return null;
  }

  return (
    <>
      <div className={"app-title"}>{pageData.title}</div>
      {pageData.content.map((contact, index) => (
        <ContactEntry data={contact} key={index} />
      ))}
    </>
  );
}

export default ContactPage;
