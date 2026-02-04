import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, CheckCircle, Clock, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
  errors: Record<string, string>
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@kiangreenup.com',
    href: 'mailto:info@kiangreenup.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Green Street, Eco City, EC 12345',
    href: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
    href: null,
  },
]

const industries = [
  'Automotive',
  'Electronics',
  'Industrial',
  'Consumer Goods',
  'Construction',
  'Packaging',
  'Other',
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
  })

  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
    errors: {},
  })

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      message: '',
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setFormState({ status: 'loading', message: '', errors: {} })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setFormState({
          status: 'success',
          message: result.message,
          errors: {},
        })
        resetForm()
      } else {
        setFormState({
          status: 'error',
          message: result.message,
          errors: result.errors || {},
        })
      }
    } catch {
      setFormState({
        status: 'error',
        message: 'Network error. Please check your connection and try again.',
        errors: {},
      })
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    // Clear field error when user starts typing
    if (formState.errors[name]) {
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: '' },
      }))
    }
  }

  const getFieldError = (fieldName: string) => formState.errors[fieldName]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Need a compound for your next project?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let's discuss how our sustainable materials can meet your requirements
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                {/* Success Message */}
                <AnimatePresence mode="wait">
                  {formState.status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-emerald-500" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                      <p className="text-gray-600 mb-6">{formState.message}</p>
                      <button
                        onClick={() => setFormState({ status: 'idle', message: '', errors: {} })}
                        className="btn btn-outline btn-sm border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Global Error Message */}
                      {formState.status === 'error' && formState.message && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="alert bg-red-50 border border-red-200 text-red-700"
                        >
                          <AlertCircle className="w-5 h-5" />
                          <span>{formState.message}</span>
                        </motion.div>
                      )}

                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-medium text-gray-700">Name *</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            disabled={formState.status === 'loading'}
                            className={`input input-bordered w-full focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${
                              getFieldError('name') ? 'input-error border-red-500' : ''
                            }`}
                            required
                          />
                          {getFieldError('name') && (
                            <span className="text-red-500 text-sm mt-1">{getFieldError('name')}</span>
                          )}
                        </div>

                        {/* Email */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-medium text-gray-700">Email *</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            disabled={formState.status === 'loading'}
                            className={`input input-bordered w-full focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${
                              getFieldError('email') ? 'input-error border-red-500' : ''
                            }`}
                            required
                          />
                          {getFieldError('email') && (
                            <span className="text-red-500 text-sm mt-1">{getFieldError('email')}</span>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        {/* Phone */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-medium text-gray-700">Phone</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            disabled={formState.status === 'loading'}
                            className="input input-bordered w-full focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          />
                        </div>

                        {/* Company */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text font-medium text-gray-700">Company</span>
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company Inc."
                            disabled={formState.status === 'loading'}
                            className="input input-bordered w-full focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                          />
                        </div>
                      </div>

                      {/* Industry */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium text-gray-700">Industry</span>
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          disabled={formState.status === 'loading'}
                          className="select select-bordered w-full focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        >
                          <option value="">Select an industry</option>
                          {industries.map((industry) => (
                            <option key={industry} value={industry}>
                              {industry}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium text-gray-700">Message *</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or inquiry..."
                          disabled={formState.status === 'loading'}
                          className={`textarea textarea-bordered w-full h-32 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${
                            getFieldError('message') ? 'textarea-error border-red-500' : ''
                          }`}
                          required
                        />
                        {getFieldError('message') && (
                          <span className="text-red-500 text-sm mt-1">{getFieldError('message')}</span>
                        )}
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        whileHover={formState.status !== 'loading' ? { scale: 1.02 } : {}}
                        whileTap={formState.status !== 'loading' ? { scale: 0.98 } : {}}
                        disabled={formState.status === 'loading'}
                        className="btn bg-emerald-500 hover:bg-emerald-600 text-white border-none w-full gap-2 disabled:bg-emerald-400"
                      >
                        {formState.status === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </motion.button>

                      <p className="text-sm text-gray-500 text-center flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" />
                        Typical response time: 1-2 business days
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-4"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-gray-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden h-48 mt-4 border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9776855098893!2d51.38897841525882!3d35.69439998019244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzM5LjgiTiA1McKwMjMnMjguNCJF!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KianGreenUp Location"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
