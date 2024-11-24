import { ContactEntryData } from "../../network/repository/contact-repository.ts";

interface ContactEntryProps {
  data: ContactEntryData;
}

function ContactEntry({ data }: ContactEntryProps) {
  return (
    <div className={"flex bg-black rounded-2xl mb-4 px-4 py-2"}>
      <div className={"flex-auto"}>
        <div className={"flex"}>
          <div className={"font-bold text-2xl"}>{data.title}</div>
        </div>
        <div className={"mt-1"}>{data.value}</div>
      </div>
    </div>
  );
}

export default ContactEntry;
