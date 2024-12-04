import ContactForm from "../../_components/contact-form/ContactForm";

export default function BookPage() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex-1 h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.5)90%,rgba(0,0,0,1)100%),url('/images/get-in-touch.jpg')] bg-cover bg-no-repeat" />
      <ContactForm className="flex-1" />
    </div>
  );
}
