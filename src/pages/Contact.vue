<template>
  <section
    id="contact"
    class="min-h-screen bg-[#0a0f1c] flex items-center justify-center px-4 py-20"
  >
    <div
      class="max-w-6xl w-full bg-[#0d152a] rounded-lg shadow-2xl border border-blue-700 p-0 md:p-8 flex flex-col md:flex-row gap-8"
    >
      <!-- 📷 Left Image -->
      <div class="w-full md:w-1/2 flex items-center justify-center p-4">
        <img
          src="/src/assets/contact.jpg"
          alt="Contact Image"
          class="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      <!-- ✉️ Right Form -->
      <div class="w-full md:w-1/2 space-y-8 px-4 md:px-0">
        <h2 class="text-3xl md:text-4xl font-bold text-blue-300 tracking-wide">
          Contact <span class="text-cyan-400">me.</span>
        </h2>

        <form @submit.prevent="sendEmail" class="space-y-6">
          <!-- Name -->
          <FloatingInput v-model="form.name" label="Name" name="user_name" />

          <!-- Email -->
          <FloatingInput v-model="form.email" label="Email" name="user_email" type="email" />

          <!-- Phone -->
          <FloatingInput v-model="form.phone" label="Phone Number" name="user_phone" type="tel" />

          <!-- Subject Dropdown -->
          <div class="relative">
            <label
              for="subject"
              class="absolute top-0 left-2 transform -translate-y-3 bg-[#0d152a] text-blue-400 px-2 text-sm"
            >
              Subject
            </label>
            <select
              v-model="form.subject"
              id="subject"
              name="subject"
              required
              class="appearance-none w-full mt-4 bg-[#0d152a] border border-blue-700 text-white text-base rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
            >
              <option disabled value="" class="text-gray-500">Select a subject</option>
              <option value="General Inquiry" class="bg-[#0d152a] text-white">General Inquiry</option>
              <option value="Work Proposal" class="bg-[#0d152a] text-white">Work Proposal</option>
              <option value="Collaboration" class="bg-[#0d152a] text-white">Collaboration</option>
              <option value="Other" class="bg-[#0d152a] text-white">Other</option>
            </select>
            <!-- Custom Dropdown Arrow -->
            <div class="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-cyan-400 text-sm">
              ▼
            </div>
          </div>

          <!-- Message -->
          <div class="relative">
            <label
              for="message"
              class="absolute top-0 left-2 transform -translate-y-3 bg-[#0d152a] text-blue-400 px-2 text-sm"
            >
              Message
            </label>
            <textarea
              v-model="form.message"
              id="message"
              name="message"
              rows="5"
              required
              class="w-full border border-blue-700 text-white bg-transparent rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-transparent"
              placeholder="Your message"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end">
            <button
              type="submit"
              class="flex items-center justify-center px-6 py-3 rounded-md bg-green-700 hover:bg-green-600 text-white font-semibold tracking-wider transition-all disabled:opacity-50"
              :disabled="isSending"
            >
              <span v-if="!isSending">SEND</span>
              <svg
                v-else
                class="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- ✅ Success Modal -->
    <div
      v-if="successMessage"
      class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
    >
      <div class="bg-[#112244] p-6 rounded-md shadow-xl text-center text-white space-y-4 border border-cyan-400">
        <h3 class="text-lg font-bold">✅ Message Sent!</h3>
        <p class="text-sm text-gray-300">Thanks for reaching out. I’ll get back to you soon.</p>
        <button
          @click="successMessage = false"
          class="mt-2 bg-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-500 text-white"
        >
          Close
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'
import FloatingInput from '@/components/FloatingInput.vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const isSending = ref(false)
const successMessage = ref(false)

const sendEmail = () => {
  isSending.value = true

  emailjs
    .send(
      'service_mly7qoq',
      'template_1z7ndme',
      {
        from_name: form.value.name,
        from_email: form.value.email,
        phone: form.value.phone,
        subject: form.value.subject,
        message: form.value.message,
      },
      'HVmbQZ1QKqzu6LS60'
    )
    .then(() => {
      successMessage.value = true
      isSending.value = false
      form.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      }
    })
    .catch((error) => {
      console.error('EmailJS error:', error)
      isSending.value = false
    })
}
</script>
