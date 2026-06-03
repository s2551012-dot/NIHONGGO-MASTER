/* ══ TAB SWITCHING ══ */
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    // Update buttons
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Update panels
    document
      .querySelectorAll(".tab-panel")
      .forEach((panel) => panel.classList.remove("active"));
    document.getElementById("tab-" + target).classList.add("active");
  });
});

/* ══ CHECKLIST PROGRESS ══ */
const checkboxes = document.querySelectorAll(
  ".check-item input[type='checkbox']",
);
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const total = checkboxes.length;

function updateProgress() {
  const checked = document.querySelectorAll(
    ".check-item input[type='checkbox']:checked",
  ).length;
  const pct = total > 0 ? (checked / total) * 100 : 0;
  if (progressFill) progressFill.style.width = pct + "%";
  if (progressText)
    progressText.textContent = checked + " / " + total + " siap";
}

checkboxes.forEach((cb) => cb.addEventListener("change", updateProgress));
updateProgress();
