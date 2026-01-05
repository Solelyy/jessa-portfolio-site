import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

    interface ContactFormData {
        name: string;
        email: string;
        message: string;
    }

    const [formData, setFormData] = useState<ContactFormData>({name:"", email:"", message:""});
    const [isSending, setIsSending] = useState(false);

    const [status, setStatus] = useState <Status>("idle");
    type Status = "idle" | "sending" | "success" | "error";

    const [errorMessage, setErrorMessage] = useState <string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const key = name as keyof ContactFormData;

    // Functional state update ensures we always use latest state
    setFormData((prev) => ({
        ...prev,
        [key]: value,
    }));
    };

    //submit
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("sending");
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.message.trim()) {
        setErrorMessage("Please fill in your name and message.");
        setStatus("error");
        setIsSending(false);
        return;
    }

    try {
        const response = await emailjs.send(
        "jessa_923",
        "template_cossitr",
        {
            name: formData.name, 
            email: formData.email,
            message: formData.message,
        },
        "aKJsCeGzDWs13TTcs"
        );
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
    } catch (err) {
        console.error("FAILED...", err);
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
    } finally {
        setIsSending(false);
    }
    };

    //disable button
    const emailIsValid = !formData.email || /\S+@\S+\.\S+/.test(formData.email);
    const isButtonDisabled = 
    isSending || !formData.name.trim() || !formData.message.trim() || !emailIsValid || !formData.email.trim();

    useEffect(() => {
        let timer: number;
        if (status === "success") {
            timer = window.setTimeout(() => {
                setStatus("idle");
            }, 4000)
        }
        return () => {
            clearTimeout(timer);
        };
    }, [status]);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8 lg:pt-0"
        >
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white dark:bg-darkCard border border-lightBorder dark:border-darkBorder rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8 lg:p-10">
                <div className="text-center mb-6">
                    <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-white">
                        Get in Touch
                    </h2>
                </div>

                <form id="contact-form" className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name
                        </label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name" 
                            required
                            className="w-full px-4 py-3 rounded-lg border border-lightBorder dark:border-darkBorder bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            id="email"
                            placeholder="Put your true email to get a reply" 
                            required
                            className="w-full px-4 py-3 rounded-lg border border-lightBorder dark:border-darkBorder bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                        />
                        {formData.email && !emailIsValid && (
                            <p className="text-red-400 text-xs">Please enter a valid email address.</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Message
                        </label>
                        <textarea 
                            name="message" 
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Your message goes here, let's discuss any project idea or opportunities!"
                            className="w-full px-4 py-3 rounded-lg border border-lightBorder dark:border-darkBorder bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                        />
                    </div>

                    {status === "error" && errorMessage && (
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                    )}

                    {status === "success" && (
                        <p className="text-green-500 text-sm text-center transition-opacity duration-500 opacity-100 animate-fadeOut">
                            Your message has been sent. Promise I'll reply 🌸
                        </p>
                    )}

                    <button 
                        type="submit"
                        disabled= {isButtonDisabled}
                        className={`bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-lg mt-2 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md
                        ${isButtonDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-accent/90 hover:scale-105 active:scale-95 hover:shadow-md"}`}
                    >
                        {isSending ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </motion.div>
    );
}