class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.datetime :starts, null: false
      t.datetime :ends, null: false
      t.text :description, null: false
      t.integer :organizer_id, null: false
      t.string :category, null: false
      t.string :ticket_type, null: false
      t.timestamps
    end
  end
end
