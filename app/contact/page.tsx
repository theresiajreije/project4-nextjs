"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function ContactPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: description,
          userId: Number(userId),
        }),
      });

      if (!res.ok) {
        setErrorMessage("Something went wrong. Please try again.");
        return;
      }

      const data = await res.json();
      console.log("POST result:", data);

      setShowPopup(true);
      setTitle("");
      setDescription("");
      setUserId("");

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (error) {
      console.log("error:", error);
      setErrorMessage("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {showPopup && (
        <div className="fixed right-6 top-6 z-[9999] rounded bg-cyan-400 px-6 py-4 text-black shadow-2xl">
          Message sent successfully!
        </div>
      )}

      <section className="min-h-screen bg-black px-8 py-20 text-white">
        <div className="mx-auto max-w-[600px]">
          <h1 className="mb-10 text-center text-3xl">Contact Us</h1>

          {errorMessage && (
            <div className="mb-6 rounded bg-red-500/20 p-4 text-center text-red-300">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="mb-2 block text-sm">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full rounded bg-[#111] px-4 py-3 outline-none focus:border focus:border-cyan-400"
                placeholder="Enter title"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={5}
                className="w-full rounded bg-[#111] px-4 py-3 outline-none focus:border focus:border-cyan-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <div>
              <label className="mb-2 block text-sm">User ID</label>
              <input
                type="number"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                className="w-full rounded bg-[#111] px-4 py-3 outline-none focus:border focus:border-cyan-400"
                placeholder="Enter user id"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 cursor-pointer rounded bg-cyan-400 px-6 py-3 text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}