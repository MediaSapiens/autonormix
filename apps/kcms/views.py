from django.shortcuts import render_to_response, get_object_or_404

def index(request):
    return render_to_response('index.html', {})

def subpage(request, page):
    try:
        return render_to_response('snippets/_%s.html' % (page), {}) 
    except:
		return render_to_response('index.html', {}) 