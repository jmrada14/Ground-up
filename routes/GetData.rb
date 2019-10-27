## optional since it's not working on axios yet
require 'net/http'
require 'uri'

uri = URI.parse("https://api.propublica.org/congress/v1/members/{house}/{florida}/current.json")
request = Net::HTTP::Get.new(uri)
request["X-Api-Key:"] = "9q67HMZ2ly0hOrXWjT9l31WN6TiGuh7XrkBl1vC"

req_options = {
    use_ssl: uri.scheme == "https",
}

response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
  http.request(request)
end

puts response
