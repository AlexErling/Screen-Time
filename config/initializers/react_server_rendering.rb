# To render React components in production, precompile the server rendering manifest:
Rails.application.config.assets.precompile += %w( react-server.js components.js )
