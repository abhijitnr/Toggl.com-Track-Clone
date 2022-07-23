
function sidebar(){
  return `
  <div id="sidebar">

      <!-- This div for clone logo and notification bell  -->
      <div id="logo">
          <img src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png"
              alt="Toggl_Track">
          <p><i class="fa-solid fa-bell"></i></p>
      </div>

      <!-- This div for track -->
      <div id="track">
          <p>TRACK</p>
          <p><span><i class="fa-solid fa-clock"></i></span> Timer</p>
      </div>

      <!-- This div for analyze -->
      <div id="analyze">
          <p>ANALYZE</p>
          <p><span><i class="fa-solid fa-file-lines"></i></span> Reports</p>
          <p><span><i class="fa-solid fa-file-waveform"></i></span> Insights</p>
      </div>

      <!-- This div for manage -->
      <div id="manage">
          <p>MANAGE</p>
          <p><span><i class="fa-solid fa-folder-closed"></i></span> Projects</p>
          <p><span><i class="fa-solid fa-user-tie"></i></span> Clients</p>
          <p><span><i class="fa-solid fa-people-group"></i></span> Team</p>
          <p><span><i class="fa-solid fa-tag"></i></span> Tags</p>
          <p><span><i class="fa-solid fa-circle-question"></i></span> Help</p>
          <p><span><i class="fa-solid fa-plug"></i></span> Integrations</p>
      </div>

      <!-- This div for analyze -->
      <div id="admin">
          <p>ADMIN</p>
          <p><span><i class="fa-solid fa-city"></i></span> Organization</p>
          <p><span><i class="fa-solid fa-gear"></i></span> Settings</p>
      </div>


      <!-- This div for trial -->
      <div id="trial">
          <p>Trial: 31 Days left</p>
          <p>Upgrade today</p>
      </div>

      <!-- This div for workspace -->
      <div id="workspace">
          <p>WORKSPACE</p>
          <p><span><i class="fa-solid fa-briefcase"></i></span> <span class="show_login_email">Admin's
                  workspace</span></p>
      </div>

      <!-- This div for admin login email -->
      <div id="login_email">
          <p><span class="show_login_email">Eamil of Admin</span> <span><i class="fa-solid fa-user"></i></span>
          </p>
      </div>

  </div>



  <!-- This div for showing timer page and append data in timer page -->
  <div id="timer_page"></div>`
}

export default sidebar;