@bookmarks.each do |bookmark|
    json.set! bookmark.id do
        json.extract! bookmark, :id, :user_id, :event_id
    end
end