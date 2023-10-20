function renderEvent() {
  eventsArr.forEach((event) => {
     if (
       event.day === activeDay &&
       event.month === month + 1 &&
       event.year === year
     ) {
       event.events.forEach((item) => {
         let eventHTML = `
         <div class="event">
           <div class="event-info">
             <h4>${item.title}</h4>
             <p>${convertTime(item.time.split(" - ")[0])} - ${convertTime(item.time.split(" - ")[1])}</p>
           </div>
           <div class="event-delete">
             <button class="btn">Delete</button>
           </div>
         </div>
         `;
         eventsContainer.innerHTML += eventHTML;
       });
     }
  });
 }
 
 renderEvent();
 addEventForm.addEventListener("submit", (e) => {
  e.preventDefault();
 
  //function to add event
addEventBtn.addEventListener("click", () => {
  addEventWrapper.classList.toggle("active");
});

addEventCloseBtn.addEventListener("click", () => {
  addEventWrapper.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target !== addEventBtn && !addEventWrapper.contains(e.target)) {
    addEventWrapper.classList.remove("active");
  }
});
  renderEvent();
 });