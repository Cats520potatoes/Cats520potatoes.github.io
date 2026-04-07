---
layout: page
title: 项目展示
permalink: /projects/
description: 这里集中展示我在具身智能、机器人控制与嵌入式系统方向的部分代表性项目视频。
nav: true
nav_order: 3
---

这个页面先选取了一批最能代表我当前方向和能力结构的项目演示视频，覆盖具身智能、机器人机构与运动控制、以及嵌入式竞赛原型等几类内容。后续项目增多时，我会继续按主题补充。

<div class="row justify-content-center mb-4">
  <div class="col-lg-9">
    {% include figure.liquid
      path="/assets/img/retargeting-overview.png"
      class="img-fluid rounded z-depth-1"
      alt="跨具身重定向流程示意"
      caption="跨具身重定向的一页思路图，用来说明从演示到机器人执行的整体链路。"
      loading="eager"
    %}
  </div>
</div>

{% for section in site.data.projects_showcase.sections %}
  <section class="showcase-section">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-3">
      <div>
        <h2 class="mb-1">{{ section.title }}</h2>
        <p class="text-muted mb-0">{{ section.description }}</p>
      </div>
    </div>

    <div class="row">
      {% for item in section.items %}
        <div class="col-lg-6 mb-4">
          <div class="card h-100 hoverable showcase-card">
            <div class="card-body">
              <div class="showcase-video mb-3">
                {% include video.liquid path=item.path class="img-fluid rounded z-depth-1" controls=true %}
              </div>
              <h5 class="card-title mb-1">{{ item.title }}</h5>
              <p class="text-muted small mb-2">{{ item.role }}</p>
              <p class="card-text">{{ item.summary }}</p>
              <p class="showcase-tags mb-0">{{ item.tags | join: " · " }}</p>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </section>
{% endfor %}

<style>
  .showcase-section {
    margin-bottom: 2.5rem;
  }

  .showcase-card {
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .showcase-video figure {
    margin: 0;
  }

  .showcase-video video {
    width: 100%;
    height: auto;
    background: #000;
  }

  .showcase-tags {
    color: #6c757d;
    font-size: 0.9rem;
  }
</style>
