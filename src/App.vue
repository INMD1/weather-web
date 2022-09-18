<template>
    <!-- 메인 해더 -->
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <div class="row">
            <div class="mobile col-3 ">
              <button class="navbar-toggler" type="button"  data-bs-toggle="offcanvas" data-bs-target="#menu_bar" aria-controls="menu_bar">
                  <ion-icon name="apps-outline"></ion-icon>
              </button>
            </div>
            <div class="col-8">
                  <a class="navbar-brand" href="#">대한민국 해수욕장 날씨</a>
            </div>
          </div>
          <div class="mobile offcanvas offcanvas-start" tabindex="-1" id="menu_bar" aria-labelledby="title_head">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="title_head">대한민국 해수욕장 날씨</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div>
                여기에는 메뉴가 자세히 나옴니다.
              </div>
              <div class="dropdown mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  Dropdown button
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
  <!--넣을 곳-->

  <!--footer-->
  
</template>

<script lang="js">

</script>

