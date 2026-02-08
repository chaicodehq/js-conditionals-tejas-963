/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {

  if(!password || typeof password !== "string") return "weak"

  let leastEightChar = password.length >= 8
  let hasCapChar = false
  let hasLowerChar = false
  let hasDigit = false
  let hasSpec = false
  
  for (const ch of password) {
    if(ch >= "A" && ch <= "Z")
      hasCapChar = true
    else if(ch >= "a" && ch <= "z")
      hasLowerChar = true
    else if(ch >= 0 && ch <= 9)
      hasDigit = true
    else if("!@#$%^&*()_+-=[]{}|;:,.<>?".includes(ch))
      hasSpec = true
  }

  const criteria = leastEightChar + hasCapChar + hasLowerChar + hasDigit + hasSpec

  if(criteria <= 1)
    return "weak"
  else if(criteria <= 3)
    return "medium"
  else if(criteria === 4)
    return "strong"
  
    return "very strong"
    
}
