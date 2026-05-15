"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Rocket,
  Target,
  Sparkles,
  ChevronDown,
} from "lucide-react"

export default function Page() {

  const [loading, setLoading] = useState(false)

  const verticals = [
    "Events",
    "Startup Development",
    "SIP",
    "Design",
    "Web Development",
    "Media & Publicity",
    "Marketing",
  ]

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    setTimeout(() => {

      setLoading(false)

      alert("Nomination Submitted Successfully 🚀")

    }, 3000)
  }

  return (

    <div className="min-h-screen bg-black overflow-hidden relative text-white">

      {/* ================= ANIMATED BACKGROUND ================= */}

      <div className="absolute inset-0">

        {/* Animated Grid */}
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"
        />

        {/* Glow 1 */}
        <motion.div
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
          }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/20 blur-[140px] rounded-full"
        />

        {/* Glow 2 */}
        <motion.div
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 100, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-500/20 blur-[140px] rounded-full"
        />

        {/* Floating Balls */}
        {[...Array(20)].map((_, i) => (

          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + i,
            }}
            className="absolute rounded-full bg-white/10 backdrop-blur-xl"
            style={{
              width: `${5 + i}px`,
              height: `${5 + i}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />

        ))}

      </div>

      {/* ================= HERO ================= */}

      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

            <Sparkles className="text-orange-400" size={18} />

            <span className="text-sm tracking-[0.25em] uppercase">
              Entrepreneurship Cell IIT Kanpur
            </span>

          </div>

        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            type: "spring",
          }}
          className="text-6xl md:text-8xl font-black leading-none"
        >

          Secretary

          <br />

          <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-100 bg-clip-text text-transparent">
            Nomination
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
          className="mt-10 text-gray-300 max-w-2xl text-lg md:text-2xl leading-relaxed"
        >

          Shape innovation. Build the future.
          Lead the entrepreneurial ecosystem at IIT Kanpur.

        </motion.p>

        {/* Scroll Animation */}
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute bottom-10"
        >

          <ChevronDown
            size={42}
            className="text-orange-400"
          />

        </motion.div>

      </section>

      {/* ================= FORM ================= */}

      <section className="relative z-10 max-w-6xl mx-auto px-4 pb-24">

        <motion.form
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-[45px] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_0_120px_rgba(251,146,60,0.15)]"
        >

          {/* Top Glow */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

          {/* Header */}
          <div className="relative overflow-hidden border-b border-white/10">

            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-[length:200%_200%]"
            />

            <div className="relative z-10 px-8 py-16 md:px-16 text-center">

              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-black text-black"
              >

                Apply Now

              </motion.h2>

              <p className="mt-4 text-black/80 text-lg">
                Secretary Recruitment 2026 – 27
              </p>

            </div>

          </div>

          {/* FORM BODY */}

          <div className="p-6 md:p-14 space-y-14">

            {/* BASIC DETAILS */}

            <SectionTitle title="Basic Details" />

            <div className="grid md:grid-cols-2 gap-8">

              <InputBox
                icon={<User />}
                placeholder="Enter your name"
              />

              <InputBox
                icon={<GraduationCap />}
                placeholder="Enter roll number"
              />

              <InputBox
                icon={<Mail />}
                placeholder="abc@iitk.ac.in"
              />

              <InputBox
                icon={<Phone />}
                placeholder="Enter phone number"
              />

            </div>

            {/* VERTICALS */}

            <SectionTitle title="Vertical Preferences" />

            <div className="grid md:grid-cols-3 gap-8">

              {[
                "1st Preference",
                "2nd Preference",
                "3rd Preference",
              ].map((title, i) => (

                <motion.div
                  key={i}
                  whileHover={{
                    y: -5,
                  }}
                >

                  <select className="w-full bg-white/5 border border-white/10 rounded-[28px] px-6 py-5 outline-none backdrop-blur-xl focus:border-orange-400 transition-all">

                    <option className="text-black">
                      {title}
                    </option>

                    {verticals.map((v) => (

                      <option
                        key={v}
                        className="text-black"
                      >
                        {v}
                      </option>

                    ))}

                  </select>

                </motion.div>

              ))}

            </div>

            {/* MISSION */}

            <TextAreaBox
              icon={<Target />}
              title="Mission"
              placeholder="Describe your mission..."
            />

            {/* VISION */}

            <TextAreaBox
              icon={<Rocket />}
              title="Vision"
              placeholder="Describe your vision..."
            />

            {/* STARTUP IDEA */}

            <TextAreaBox
              title="If you were to establish a Startup aimed at solving a real-world problem, what would it be and what issue would it address?"
              placeholder="Describe your startup idea..."
            />

            {/* SUBMIT */}

            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0px 0px 80px rgba(251,146,60,0.7)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              disabled={loading}
              className="relative overflow-hidden w-full rounded-[35px] py-6 text-2xl font-black bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 text-black"
            >

              {/* Shine */}
              <motion.div
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
                className="absolute inset-0 w-1/3 bg-white/20 skew-x-12 blur-2xl"
              />

              <AnimatePresence mode="wait">

                <motion.span
                  key={loading ? "loading" : "submit"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="relative z-10"
                >

                  {loading
                    ? "Submitting..."
                    : "Submit Nomination"}

                </motion.span>

              </AnimatePresence>

            </motion.button>

          </div>

        </motion.form>

      </section>

    </div>
  )
}

/* ================= SECTION TITLE ================= */

function SectionTitle({ title }) {

  return (

    <motion.h3
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
      }}
      className="text-3xl md:text-4xl font-black"
    >

      {title}

    </motion.h3>
  )
}

/* ================= INPUT ================= */

function InputBox({ icon, placeholder }) {

  return (

    <motion.div
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      className="relative group"
    >

      {/* Glow */}
      <div className="absolute -inset-[1px] rounded-[30px] bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-yellow-500/0 opacity-0 blur-xl group-hover:opacity-100 transition-all duration-500" />

      <div className="relative flex items-center rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

        <div className="pl-6 text-orange-400">
          {icon}
        </div>

        <input
          placeholder={placeholder}
          className="w-full bg-transparent px-5 py-5 outline-none placeholder:text-gray-400"
        />

      </div>

    </motion.div>
  )
}

/* ================= TEXTAREA ================= */

function TextAreaBox({
  title,
  placeholder,
  icon,
}) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
      }}
      whileHover={{
        y: -5,
      }}
      className="relative group"
    >

      {/* Glow */}
      <div className="absolute -inset-[1px] rounded-[35px] bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-yellow-500/0 opacity-0 blur-2xl group-hover:opacity-100 transition-all duration-700" />

      <div className="relative rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">

          {icon}

          {title}

        </h3>

        <textarea
          rows={7}
          placeholder={placeholder}
          className="w-full rounded-[28px] border border-white/10 bg-black/20 px-6 py-5 outline-none focus:border-orange-400 resize-none transition-all placeholder:text-gray-400"
        />

      </div>

    </motion.div>
  )
}