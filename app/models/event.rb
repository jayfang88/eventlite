class Event < ApplicationRecord
    validates :title, uniqueness: true
    validates :title, :location, :starts, :ends, :description, :organizer_id, :category, :ticket_type, presence: true

    belongs_to :organizer,
        foreign_key: :organizer_id,
        class_name: :User

    has_one_attached :photo
end
