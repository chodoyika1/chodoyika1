---
layout: null
---
{% assign counter = 1 %}
{% assign total = site.recipes | size %}
[{% for post in site.recipes %}
    {
        "title": "{{ post.title }}",
        "image": "{{ site.baseurl }}/images/{{ post.image }}"
    }{% if counter == total %}{% else %},{% endif %}
{% assign counter = counter |plus: 1 %}{% endfor %}]