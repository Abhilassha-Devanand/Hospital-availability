function matchHospital() {
    let condition = document.getElementById("condition").value;
    let severity = document.getElementById("severity").value;

    let output = `
      <div class="card">
        <h3>Best Match Found</h3>
        <p><b>Condition:</b> ${condition}</p>
        <p><b>Severity:</b> ${severity}</p>
        <p><b>Suggested Hospital:</b> City Medical Hospital</p>
        <p><b>Recommended Bed:</b> ICU</p>
        <button class="btn" onclick="location.href='hospital.html'">View Hospital</button>
      </div>
    `;

    document.getElementById("result").innerHTML = output;
}
