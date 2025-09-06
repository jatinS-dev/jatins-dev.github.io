---
layout: page
title: projects
permalink: /projects/
description: A showcase of my research, development, and open source contributions in AI/ML, NLP, and distributed systems.
nav: true
nav_order: 3
display_categories: [AI/ML, Research, Open Source]
horizontal: false
---

Welcome to my projects showcase! Here you'll find a collection of my work spanning **Machine Learning**, **Natural Language Processing**, **Distributed Systems**, and **Open Source Development**. Each project represents a unique challenge and learning opportunity, from real-time AI systems to clinical NLP research.

## Project Categories

- **🤖 AI/ML**: Machine learning and artificial intelligence projects including computer vision and real-time inference systems
- **🔬 Research**: Academic research projects with publications and significant contributions to the field
- **🌐 Open Source**: Community contributions and open source development work

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
