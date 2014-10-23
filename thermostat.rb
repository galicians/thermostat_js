require 'sinatra'
require 'json'
require 'net/http'

set :public_folder, settings.root + '/public/'
set :views, settings.root + '/views/'

get '/' do
	erb :index
end

get '/weather' do 

    url = 'http://api.openweathermap.org/data/2.5/find?q=London&units=metric'
    resp = Net::HTTP.get_response(URI.parse(url))
    data = resp.body
end