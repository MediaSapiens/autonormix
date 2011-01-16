from django.conf.urls.defaults import *

urlpatterns = patterns('kcms',
	(r'^$', 'views.index'),
	(r'(?P<page>\w+)/$', 'views.subpage'),
)
