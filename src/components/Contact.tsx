import { fadeIn, slideIn } from "@/lib/utils";
import { motion } from "framer-motion";
import MaxWidth from "./MaxWidth";
import useInViewRef from "@/hooks/useInViewRef";
import { Button } from "./ui/button";
import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { toast } from "sonner";
import { socialNetworks } from "@/static-data";
import useSetInViewParamsHash from "@/hooks/useSetInViewParamsHash";

const SocialNetworkCard = ({
  index,
  name,
  icon,
  link,
}: {
  index: number;
  name: string;
  icon: string;
  link: string;
}) => {
  const [socialIconRef, isSocialIconInView] = useInViewRef();
  return (
    <motion.img
      ref={socialIconRef}
      initial="hidden"
      animate={isSocialIconInView ? "show" : "hidden"}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      src={icon}
      alt={name}
      className="w-16 h-16 cursor-pointer"
      onClick={() => window.open(link, "_blank")}
    />
  );
};

const Contact = () => {
  const ref = useSetInViewParamsHash();
  const [loading, setLoading] = useState(false);
  const [contactRef, isContactinView] = useInViewRef();
  const [socialMediaRef, isSocialMediainView] = useInViewRef();

  const formRef = useRef(null!);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const emailPromise = emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Tauqeer Ahmed",
        from_email: form.email,
        to_email: "tauqueerrkhan@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    );

    toast.promise(emailPromise, {
      loading: "Sending Email...",
      success: (_data: EmailJSResponseStatus) => {
        setForm({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
        return "Thank You! I will reach out to you shortly.";
      },
      error: (data: EmailJSResponseStatus) => {
        console.log(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID
        );
        setLoading(false);
        return data.text;
      },
    });
  };

  return (
    <MaxWidth
      ref={ref}
      id="contact"
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        ref={contactRef}
        initial="hidden"
        animate={isContactinView ? "show" : "hidden"}
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-1 p-8 bg-black-100 rounded-2xl"
      >
        <p className="sm:text-[18px] text-[14px] text-primary uppercase tracking-wider">
          Get in touch
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact.
        </h3>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-8 mt-12 md:w-1/2"
          >
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
                required
              />
            </label>
            <Button
              disabled={loading}
              className="flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="animate-spin" />}
              Send
            </Button>
          </form>
          <motion.div
            ref={socialMediaRef}
            initial="hidden"
            animate={isSocialMediainView ? "show" : "hidden"}
            variants={slideIn("right", "tween", 0.2, 1)}
            className="w-full my-14 md:w-1/3"
          >
            <p className="sm:text-[18px] text-[14px] text-primary uppercase tracking-wider">
              Connect On Social Networks
            </p>
            <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Social Media.
            </h3>
            <div className="flex gap-8 mt-4 md:mt-0">
              {socialNetworks.map((social, index) => (
                <SocialNetworkCard
                  key={social.name}
                  {...social}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </MaxWidth>
  );
};

export default Contact;
