import fs from "node:fs"

const path = "src/components/LeadForm/LeadForm.tsx"
let content = fs.readFileSync(path, "utf8")

const pattern = /async function submitLead\(data: FormData\): Promise<void> \{[\s\S]*?\n\}/

const replacement = `async function submitLead(data: FormData): Promise<void> {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      phone: data.phone,
      product: data.product,
      comment: data.comment,
    }),
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || "\\u041d\\u0435 \\u0443\\u0434\\u0430\\u043b\\u043e\\u0441\\u044c \\u043e\\u0442\\u043f\\u0440\\u0430\\u0432\\u0438\\u0442\\u044c \\u0437\\u0430\\u044f\\u0432\\u043a\\u0443")
  }
}`

if (!pattern.test(content)) {
  console.error("submitLead function not found")
  process.exit(1)
}

content = content.replace(pattern, replacement)
fs.writeFileSync(path, content, "utf8")

console.log("LeadForm.tsx updated successfully")
console.log("API check:", content.includes('fetch("/api/lead"'))
